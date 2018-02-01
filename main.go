package main

import (
	"bytes"
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/apex/gui/components"
	"github.com/apex/log"
	"github.com/tj/go/env"
)

func main() {
	addr := ":" + env.GetDefault("PORT", "3000")
	err := http.ListenAndServe(addr, http.HandlerFunc(serve))
	if err != nil {
		log.Fatalf("error: %s", err)
	}
}

// serve the request.
func serve(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/_health" {
		fmt.Fprintln(w, ":)")
		return
	}

	var in struct {
		Name   string            `json:"name"`
		Config components.Config `json:"config"`
	}

	if err := json.NewDecoder(r.Body).Decode(&in); err != nil {
		log.WithError(err).Error("parsing body")
		http.Error(w, "Malformed request body.", http.StatusBadRequest)
		return
	}

	ctx := log.WithField("name", in.Name)
	ctx.Info("rendering")

	var buf bytes.Buffer
	err := components.Render(&buf, in.Name, in.Config)
	if err != nil {
		ctx.WithError(err).Error("rendering")
		http.Error(w, "Error rendering.", http.StatusBadRequest)
		return
	}

	setETag(w, buf.Bytes())
	w.Header().Set("Content-Type", "image/svg+xml")
	w.Header().Set("Cache-Control", "private")
	io.Copy(w, &buf)
}

// setETag sets the etag for body.
func setETag(w http.ResponseWriter, body []byte) {
	hash := md5.New()
	hash.Write(body)
	etag := hex.EncodeToString(hash.Sum(nil))
	w.Header().Set("ETag", `w/"`+etag+`"`)
}

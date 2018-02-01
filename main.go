package main

import (
	"bytes"
	"crypto/md5"
	"encoding/hex"
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

	name := "ShadowButton"

	ctx := log.WithFields(log.Fields{
		"name": name,
	})

	ctx.Info("rendering")

	var buf bytes.Buffer
	err := components.Render(&buf, name, components.Config{
		"text": "SUBSCRIBE",
	})

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

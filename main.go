package main

import (
	"bytes"
	"crypto/md5"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/apex/log"
	"github.com/tj/go/env"
	"github.com/tj/go/http/request"

	"github.com/apex/gui/components"
	"github.com/apex/gui/views"
)

func main() {
	addr := ":" + env.GetDefault("PORT", "3000")
	err := http.ListenAndServe(addr, http.HandlerFunc(handle))
	if err != nil {
		log.Fatalf("error: %s", err)
	}
}

// handle the request.
func handle(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/_health" {
		fmt.Fprintln(w, ":)")
		return
	}

	if r.Method == "GET" && r.URL.Path == "/" {
		index(w, r)
		return
	}

	name := request.Param(r, "name")
	config := request.Param(r, "config")
	var c components.Config

	if strings.TrimSpace(name) == "" {
		http.Error(w, "Component `name` parameter is required.", http.StatusBadRequest)
		return
	}

	if err := json.Unmarshal([]byte(config), &c); err != nil {
		log.WithError(err).Error("parsing config")
		http.Error(w, "Component `config` parameter is malformed.", http.StatusBadRequest)
		return
	}

	ctx := log.WithField("name", name)
	ctx.Info("rendering")

	var buf bytes.Buffer
	err := components.Render(&buf, name, c)
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

// index page.
func index(w http.ResponseWriter, r *http.Request) {
	views.Render(w, "index", nil)
}

// setETag sets the etag for body.
func setETag(w http.ResponseWriter, body []byte) {
	hash := md5.New()
	hash.Write(body)
	etag := hex.EncodeToString(hash.Sum(nil))
	w.Header().Set("ETag", `w/"`+etag+`"`)
}

package main

import (
	"bytes"
	"fmt"
	"log"

	"github.com/alecthomas/template"
)

// systemFonts is a list of system fonts.
const systemFonts = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

// components is the components available for rendering.
var components = template.Must(template.ParseGlob("components/*.svg"))

func main() {
	var buf bytes.Buffer
	err := components.ExecuteTemplate(&buf, "FlatButton.svg", nil)
	if err != nil {
		log.Fatalf("error: %s", err)
	}

	fmt.Printf("%s", buf.String())
}

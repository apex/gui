package views

import (
	"io"

	"html/template"
)

// tmpls is the views available for rendering.
var tmpls = template.Must(template.New("").ParseGlob("views/*.html"))

// Render a view by name with optional data.
func Render(w io.Writer, name string, data interface{}) error {
	return tmpls.ExecuteTemplate(w, name+".html", data)
}

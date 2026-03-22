# MasalaCSS

MasalaCSS is a lightweight, utility-first CSS engine inspired by Tailwind-style classes.
It applies styles directly from JavaScript by reading class names like `masala-bg-red` and mapping them to CSS rules.

## Why this project

This project is a learning-first custom CSS framework that helps you:

- understand how utility CSS works under the hood
- build your own class-to-style mapping system
- experiment with fast prototyping without external dependencies

## Current setup

Project structure:

- `index.html` - demo page using utility classes
- `index.js` - runtime engine that scans classes and applies styles
- `cssobjects.js` - utility class map (class name -> CSS declaration)

## How it works

1. `index.js` imports the utility object from `cssobjects.js`.
2. It scans all DOM nodes.
3. It picks class names that start with the prefix `masala-`.
4. For every matching class, it fetches the CSS declaration from `masalaCSS`.
5. It appends those declarations to the element's inline style.

## Run locally

Since this project uses ES modules (`import`/`export`), run it with a local server.

### Option 1: VS Code Live Server

- Install the Live Server extension.
- Right click `index.html` and choose **Open with Live Server**.

### Option 2: Python simple server

From the project folder:

```bash
python -m http.server 5500
```

Then open:

- `http://localhost:5500`

## Example usage

In `index.html`:

```html
<h1 class="masala-bg-red masala-font-light masala-p-20">Masala CSS</h1>
```

In `cssobjects.js`:

```js
"masala-bg-red": "background-color: red;",
"masala-font-light": "font-weight: 300;",
"masala-p-20": "padding: 20px;",
```

## Naming convention

- Prefix: `masala-`
- Pattern: `masala-{category}-{value}`

Examples:

- `masala-text-blue`
- `masala-p-10`
- `masala-rounded`
- `masala-flex`

## Utility class reference

The table below lists every class currently available in `cssobjects.js`.

| Utility class            | CSS declaration                          |
| ------------------------ | ---------------------------------------- |
| `masala-bg-red`          | `background-color: red;`                 |
| `masala-bg-blue`         | `background-color: blue;`                |
| `masala-bg-green`        | `background-color: green;`               |
| `masala-bg-black`        | `background-color: black;`               |
| `masala-bg-white`        | `background-color: white;`               |
| `masala-text-red`        | `color: red;`                            |
| `masala-text-blue`       | `color: blue;`                           |
| `masala-text-black`      | `color: black;`                          |
| `masala-text-white`      | `color: white;`                          |
| `masala-text-sm`         | `font-size: 12px;`                       |
| `masala-text-md`         | `font-size: 16px;`                       |
| `masala-text-lg`         | `font-size: 20px;`                       |
| `masala-text-xl`         | `font-size: 24px;`                       |
| `masala-font-bold`       | `font-weight: bold;`                     |
| `masala-font-normal`     | `font-weight: normal;`                   |
| `masala-font-light`      | `font-weight: 300;`                      |
| `masala-text-left`       | `text-align: left;`                      |
| `masala-text-center`     | `text-align: center;`                    |
| `masala-text-right`      | `text-align: right;`                     |
| `masala-p-5`             | `padding: 5px;`                          |
| `masala-p-10`            | `padding: 10px;`                         |
| `masala-p-20`            | `padding: 20px;`                         |
| `masala-pt-10`           | `padding-top: 10px;`                     |
| `masala-pb-10`           | `padding-bottom: 10px;`                  |
| `masala-pl-10`           | `padding-left: 10px;`                    |
| `masala-pr-10`           | `padding-right: 10px;`                   |
| `masala-m-5`             | `margin: 5px;`                           |
| `masala-m-10`            | `margin: 10px;`                          |
| `masala-m-20`            | `margin: 20px;`                          |
| `masala-mt-10`           | `margin-top: 10px;`                      |
| `masala-mb-10`           | `margin-bottom: 10px;`                   |
| `masala-ml-10`           | `margin-left: 10px;`                     |
| `masala-mr-10`           | `margin-right: 10px;`                    |
| `masala-border`          | `border: 1px solid black;`               |
| `masala-border-2`        | `border: 2px solid black;`               |
| `masala-border-red`      | `border-color: red;`                     |
| `masala-border-blue`     | `border-color: blue;`                    |
| `masala-rounded-sm`      | `border-radius: 4px;`                    |
| `masala-rounded`         | `border-radius: 8px;`                    |
| `masala-rounded-lg`      | `border-radius: 16px;`                   |
| `masala-rounded-full`    | `border-radius: 9999px;`                 |
| `masala-block`           | `display: block;`                        |
| `masala-inline`          | `display: inline;`                       |
| `masala-inline-block`    | `display: inline-block;`                 |
| `masala-flex`            | `display: flex;`                         |
| `masala-grid`            | `display: grid;`                         |
| `masala-hidden`          | `display: none;`                         |
| `masala-flex-row`        | `flex-direction: row;`                   |
| `masala-flex-col`        | `flex-direction: column;`                |
| `masala-justify-center`  | `justify-content: center;`               |
| `masala-justify-between` | `justify-content: space-between;`        |
| `masala-items-center`    | `align-items: center;`                   |
| `masala-w-full`          | `width: 100%;`                           |
| `masala-h-full`          | `height: 100%;`                          |
| `masala-w-50`            | `width: 50%;`                            |
| `masala-h-50`            | `height: 50%;`                           |
| `masala-relative`        | `position: relative;`                    |
| `masala-absolute`        | `position: absolute;`                    |
| `masala-fixed`           | `position: fixed;`                       |
| `masala-shadow`          | `box-shadow: 0 2px 5px rgba(0,0,0,0.2);` |
| `masala-transition`      | `transition: all 0.3s ease;`             |
| `masala-pointer`         | `cursor: pointer;`                       |
| `masala-opacity-50`      | `opacity: 0.5;`                          |

## Features implemented

- Colors (background + text)
- Typography (size, weight, alignment)
- Spacing (padding + margin)
- Borders and border radius
- Basic layout and flex helpers
- Width/height helpers
- Position utilities
- Small extras (shadow, transition, pointer, opacity)

## Known limitations

- Styles are currently applied once on initial load.
- Dynamically added elements are not auto-processed.
- Utility values are currently static object keys.

## Next improvements

- Add dynamic utilities like:
  - `masala-p-14`
  - `masala-mt-24`
  - `masala-text-22`
- Add responsive prefixes (for example `sm:`, `md:` behavior)
- Add pseudo-class support like hover/focus utilities
- Add a tiny dev watcher/build step for production optimization

## Contributing

Contributions are welcome.
Open an issue or submit a pull request with improvements to utility parsing, class naming, or runtime behavior.

## License

MIT (you can change this to your preferred license)

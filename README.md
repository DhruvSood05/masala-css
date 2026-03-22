# MasalaCSS

MasalaCSS is a lightweight JavaScript utility CSS engine.
It reads classes like `masala-bg-red` from your HTML and applies style rules from `cssobjects.js`.

## Recommended way to use MasalaCSS

Your approach is correct and recommended:

1. Clone this repository.
2. Open the cloned folder in VS Code.
3. Write your project HTML inside this same folder.
4. Keep `index.js` and `cssobjects.js` in that folder.
5. Run with a local server.

This method avoids path/import issues and ensures utility classes apply correctly.

## Quick start

```bash
git clone <your-repo-url>
cd masalaCSS
```

Run a local server:

```bash
python -m http.server 5500
```

Open in browser:

```text
http://localhost:5500
```

## Project files

- `index.html` - your demo/app markup
- `index.js` - runtime engine that scans DOM classes and applies styles
- `cssobjects.js` - utility class map (`className -> CSS declaration`)

## Required script in HTML

Make sure your HTML includes this:

```html
<script type="module" src="index.js"></script>
```

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

## Why clone-first works best

MasalaCSS uses ES modules (`import` and `export`).
So `index.js` must be able to import `cssobjects.js` from the same project path.
If files are moved around, opened directly with `file:///`, or used from another random folder, styles may not apply.

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

## Troubleshooting

If CSS is not applying:

1. Confirm class names start with `masala-`.
2. Confirm the class exists in `cssobjects.js`.
3. Confirm your HTML has `<script type="module" src="index.js"></script>`.
4. Run the page through a local server, not direct file open.
5. Check browser console for import warnings.

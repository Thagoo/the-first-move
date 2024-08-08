#!/bin/bash

# Function to convert SVG to WebP with improved quality
convert_svg_to_webp() {
    for file in "$1"/*.svg; do
        if [ -f "$file" ]; then
            # Generate the intermediate PNG filename
            png_file="${file%.svg}.png"
            # Generate the output WebP filename
            webp_file="${file%.svg}.webp"

            # Convert SVG to PNG using rsvg-convert (from librsvg)
            rsvg-convert -o "$png_file" "$file"

            # Convert PNG to WebP with improved quality (e.g., quality set to 90)
            cwebp -q 100 "$png_file" -o "$webp_file"

            # Remove the intermediate PNG file
            rm "$png_file"
        fi
    done

    for dir in "$1"/*/; do
        if [ -d "$dir" ]; then
            convert_svg_to_webp "$dir"
        fi
    done
}

# Check if directory is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Start converting from the provided directory
convert_svg_to_webp "$1"

echo "SVG to WebP conversion complete."

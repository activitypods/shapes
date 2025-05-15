#!/usr/bin/env bash

# Helper script for building ldo objects.
# Returns tuples of input directories that contain shex files
# and a relative output directory we can pass to ldo --output

# Exit immediately if a command exits with a non-zero status
set -e

DEFINITIONS_DIR=../shape-definitions/source
TARGET_DIR=./src/types-generated

# Find all directories containing .shex files under $DEFINITIONS_DIR
find $DEFINITIONS_DIR -name '*.shex' -printf '%h\n' | \
# Deduplicate
uniq | \
# Count directory depth and add as prefix
awk -F/ '{print NF, $0}' | \
# Sort by depth, lowest first (ldo wipes directories before writing)
sort -n | \
# Remove depth prefix again
cut -d' ' -f2- | \
# Traverse directories
while read -r dir; do
  # Extract the relative path from $dir by removing the $DEFINITIONS_DIR prefix,
  # then append it to $TARGET_DIR to create the corresponding output directory path
  out_dir="$TARGET_DIR/${dir#$DEFINITIONS_DIR/}"
  
  mkdir -p "$out_dir"
  
  # Output the input and output directory pair
  echo "$dir $out_dir"
done

#!/bin/bash

SOURCE="/home/zairakai/zairakai/npm/silvershade"
TARGET="/home/zairakai/zairakai/skillbridge/node_modules/@zairakai/silvershade"

echo "Surveillance des modifications dans $SOURCE"
inotifywait -m -r -e modify,create,delete,move "$SOURCE" |
while read -r directory events filename; do
    echo "Modification détectée : $directory$filename"
    rsync -av --progress "${SOURCE}/" "$TARGET"
    echo "Synchronisation terminée."
done

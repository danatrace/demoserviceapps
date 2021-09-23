items=$(git diff --name-only HEAD~1 | awk -F "/*[^/]*/*$" '{ print ($1 == "" ? "." : $1); }' | sort | uniq)

IFS='
'
count=0
for item in $items
do
  count=$((count+1))
  echo $count $item
done

#!/bin/sh
# Remove the disposable site copies that the core's tests leave in /tmp
# (oldcache-test*, sched-*, preview-test*, state-test*, kit-ci-*, import-test*),
# once they are idle: nothing in them changed in the last 30 minutes and no
# running process has its working directory or an open file inside them.
# drill-checks-* folders (run_checks.sh logs) are kept as evidence; kit-ci
# checks.log files are copied to $LOGDIR first if it is set.
# Run after ./run_checks.sh and the browser tests (release step 3b).
set -u
inuse=$( (for p in /proc/[0-9]*; do readlink "$p/cwd" 2>/dev/null; ls -l "$p/fd" 2>/dev/null | awk '{print $NF}'; done) | grep -oE '^/tmp/[^/]+' | sort -u)
n=0
for d in /tmp/oldcache-test* /tmp/sched-* /tmp/preview-test* /tmp/state-test* /tmp/kit-ci-* /tmp/import-test*; do
  [ -d "$d" ] || continue
  echo "$inuse" | grep -qx "$d" && continue
  [ -n "$(find "$d" -maxdepth 2 -newermt '-30 minutes' -print -quit 2>/dev/null)" ] && continue
  if [ -n "${LOGDIR:-}" ] && [ -f "$d/checks.log" ]; then mkdir -p "$LOGDIR"; cp "$d/checks.log" "$LOGDIR/$(basename "$d").checks.log"; fi
  rm -rf "$d" && n=$((n+1))
done
echo "clean_test_tmp: removed $n idle test folders; $(df -h / | awk 'NR==2{print $4}') free"

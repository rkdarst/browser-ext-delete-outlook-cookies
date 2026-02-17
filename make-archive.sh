# Create the zipfile that is the extension.
# This does not yet work, since the .xpi file would have to be signed.

#set -e

cd $(dirname $0)
mkdir -p build

cp firefox-update-manifest.json build/
cp release/*.xpi build/

pushd extension/   # cd and save dir
# Firefox version
zip ../build/firefox-ext-delete-outlook-cookies.xpi \
    manifest.json \
    background.js \
    icon.ico
popd               # change back to old directory


rm -f build/index.html
echo "The files with a version number have been approved.<br>" >> build/index.html
for file in $( cd build; ls *.xpi ); do
    echo "<a href=\"$file\">$file</a><br>" >> build/index.html
done

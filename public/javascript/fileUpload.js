FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);

FilePond.setOptions({
  stylePanelAspectRatio: 250 / 200,
  imageResizeTargetWidth: 200,
  imageResizeTargetHeight: 250,
});

FilePond.parse(document.body);
console.log(document.body);

FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode
);

FilePond.setOptions({
  stylePanelAspectRatio: 250 / 180,
  imageResizeTargetWidth: 180,
  imageResizeTargetHeight: 250,
});

FilePond.parse(document.body);
console.log(document.body);

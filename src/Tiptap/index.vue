<template>
  <div class="index_style">
  <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";  
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
// import Highlight from '@tiptap/extension-highlight';
new Editor({
  extensions: [StarterKit],
  extensions: [Document, Paragraph, Text],
  editable: true,
});
export default {
  name:'index',
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      content: "<p>123321</p>",
      extensions: [StarterKit],
      autofocus: "start",
      editable: true,
    });
    // DataIsNull();
    // DataIsNull
  },
  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>
<style scoped>
.index_style {
  width: 60%;
  margin: 0 auto;
}
</style>
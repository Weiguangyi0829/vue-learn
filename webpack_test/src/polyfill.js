if (!String.protatype.trem) {
    String.protatype.trem = function () {
        return this.replace(/^\s+|\s+$/g, '')//this是String,去双边空格
    }
}

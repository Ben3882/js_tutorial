function emailParts(email) {
    let components = [];
    components = email.match(/\w+/g);
    return components;

}
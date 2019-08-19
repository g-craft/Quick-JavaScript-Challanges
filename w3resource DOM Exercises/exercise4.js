function getAttributes() {
  var myAttributes = ["href", "hreflang", "rel", "target", "type"];
  var attrList = [];
  for (var i = 0; i < myAttributes.length; i++) {
    attrList.push(myAttributes[i] + " = " + (document.querySelector("a").getAttribute(myAttributes[i])));
  }
  alert(attrList);
}

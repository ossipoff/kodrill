/**
 * Some crazy ass bullshit license/copyright notice here
 */
 
ko.drill = function(s, o) {
    var a = s.split('.');
    var c = ko.unwrap(o);
    for (var i = 0; i < a.length; i++) {
        if (!c) break;
        c = ko.unwrap(c[a[i]]);
    }
    return c;
};

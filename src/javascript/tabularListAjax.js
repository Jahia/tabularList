import {jreplace} from './lib/ajaxreplace';

export function initTabs(selector, url) {
    var tabs = document.getElementsByClassName("ajaxListTab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(e) {
            var split = e.currentTarget.id.split("_");
            jreplace(selector, url,{displayTab:split[1],mainResource: split[2] + '.html'},null,true);
        });
    }
}

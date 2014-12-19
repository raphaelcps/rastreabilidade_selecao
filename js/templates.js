(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['commits'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<li>\n	<div>\n		<img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.avatar_url : stack1), depth0))
    + "\"/>\n		<span>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.commit : depth0)) != null ? stack1.message : stack1), depth0))
    + "</span> <span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.commit : depth0)) != null ? stack1.author : stack1)) != null ? stack1.date : stack1), depth0))
    + "</span>\n		<span>@"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.login : stack1), depth0))
    + "</span>\n	</div>\n	</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.commits : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['content'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	<div class=\"header\">\n		<span>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n		<span>stars "
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</span>\n		<span>forks "
    + escapeExpression(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</span>\n	</div>\n\n	<div id=\"commits\" class=\"commits\">\n		<ul>\n		</ul>\n	</div>\n	<button id=\"loadButton\" onclick=\"controller.loadCommits()\">Load More</button>\n";
},"useData":true});
templates['menu'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "	<li><a class=\"project\" href=\"#\" onclick=\"controller.loadProject('"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "')\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "	<h1>Projetos</h1>\n	<ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.projects : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</ul>\n";
},"useData":true});
})();

var Controller = function(accountName) {
	this.api = new GithubAPI();
	this.accountName = accountName;
};
Controller.prototype.loadProjects = function() {
	$("#content").children().remove();

	this.api.getProjects(this.accountName, function (error, data) {
		if (!error) {
			var sorted = data.sort(function (a, b) {
				// decreasing
				return b.stargazers_count-a.stargazers_count;
			});
			$("#menu").append(Handlebars.templates["menu"]({projects:sorted}));
		}
	});
};
Controller.prototype.loadCommits = function() {
	var self = this;
	this.api.getProjectCommits(this.accountName, this.projectName, ++this.pageNum, function (error, data, isLastPage) {
		if (!error) {
			$("#commits").append(Handlebars.templates["commits"]({commits:data}));
			if (isLastPage) {
				$("#loadButton").hide();
			}
		}
	});
};
Controller.prototype.loadProject = function(name) {

	$("#content").children().remove();

	this.projectName = name;
	var self = this;
	this.api.getProject(this.accountName, name, function (error, data) {
		if (!error) {
			$("#content").append(Handlebars.templates["content"](data));
			self.pageNum = 0;
			self.loadCommits();
		}
	});

};

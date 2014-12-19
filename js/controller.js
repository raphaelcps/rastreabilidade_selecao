var GithubAPI = function () {	
};

GithubAPI.prototype.baseURL = "https://api.github.com";

GithubAPI.prototype.getRequest = function (path, callback) {
	$.getJSON(this.baseURL + path, function(data, textStatus, jqxhr) {
		callback(false, data, jqxhr);
	}).fail(function(jqxhr, textStatus, error) {
		callback(true, error, jqxhr);
	});
};

GithubAPI.prototype.getProjects = function (account, callback) {
	this.getRequest("/orgs/" + account + "/repos", callback);
};

GithubAPI.prototype.getProject = function (account, project, callback) {
	this.getRequest("/repos/" + account + "/" + project, callback);
};

GithubAPI.prototype.getProjectCommits = function (account, project, page, callback) {
	this.getRequest("/repos/" + account + "/" + project + "/commits?per_page=20&page=" + page, function (error, data, jqxhr) {
		var isLastPage = false;
		if (!error) {
			// check next page
			var nextPage = jqxhr.getResponseHeader("Link").match(/page=(\d+)>.*rel="next"/);
			isLastPage = !nextPage;
		}
		callback(error, data, isLastPage);
	});
};

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

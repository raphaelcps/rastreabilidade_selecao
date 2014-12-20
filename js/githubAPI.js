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
			var nextPage = jqxhr.getResponseHeader("Link").match(/page=\d+>.*rel="next"/);
			isLastPage = !nextPage;
		}
		callback(error, data, isLastPage);
	});
};
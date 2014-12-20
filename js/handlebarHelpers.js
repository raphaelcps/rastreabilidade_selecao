Handlebars.registerHelper('format_date', function(date) {
  return new Handlebars.SafeString(
    new Date(date).toLocaleDateString()
  );
});
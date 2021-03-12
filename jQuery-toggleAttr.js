	$.fn.toggleAttr = function(attributes) {
		var attr = [];
		attributes = attributes.split(/\s+/).filter(function(e) { return e; });
		for (var i in attributes) {
			try {
				attributes[i] = attributes[i].split(/=/);
				attr[attributes[i][0]] = attributes[i][1].replace(/^['"]/, '').replace(/['"]$/, '');
			}
			catch(e) {
				attr[attributes[i]] = "";
			}
		}
		return this.each(function() {
			for (var i in attr) {
				if ($(this).is('[' + i + ']')) $(this).removeAttr(i);
				else $(this).attr(i, attr[i]);
			}
		});
	}

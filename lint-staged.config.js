const hooks = {
	'*.js': ['eslint --fix', 'prettier --write'],

	'*.ts': ['eslint --fix', 'prettier --write'],

	'*.css': ['prettier --write'],

	'*.md': ['prettier --write'],

	'*.html': ['prettier --write'],
}

export default hooks

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs,jsx}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 'off',
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		allowTemplateLiterals: true,
	},
}

/*
 * @Author: liejiayong 809206619@qq.com
 * @Date: 2023-06-17 16:47:30
 * @LastEditors: liejiayong 809206619@qq.com
 * @LastEditTime: 2023-09-22 11:13:14
 * @FilePath: \ide-config\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'], // eslint-config-prettier],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/no-v-html': 'off',
		'no-tabs': 'off',
		'space-before-function-paren': 0,
		'arrow-parens': 0,
		'no-console': 'off',
		'single-quote': false,
		'no-unused-vars': [
			'error',
			{
				args: 'none',
			},
		],
		indent: 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
	],
};

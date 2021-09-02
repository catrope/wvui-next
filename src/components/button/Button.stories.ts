import { Component } from 'vue';
import { Args, StoryContext } from '@storybook/addons';
import WvuiButton from './Button.vue';
import { PrimaryAction } from '../../actions/PrimaryAction';
import { filterKeys, makeActionArgTypes, makeActionListeners } from '../../utils/StoryUtils';
import './Button.stories.less';

// This whole mess is because we're not using ES2017's Object.values().
const actionOptions = (
	Object.keys( PrimaryAction ) as Array<keyof typeof PrimaryAction>
).map( ( key ) => {
	return PrimaryAction[ key ];
} );

export default {
	title: 'Components/Button',
	component: WvuiButton,
	argTypes: {
		action: {
			options: actionOptions,
			control: 'inline-radio'
		},
		quiet: {
			control: 'boolean'
		},
		disabled: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		default: {
			control: 'text'
		},
		...makeActionArgTypes( [ 'click' ] )
	},
	parameters: {
		layout: 'centered'
	}
};

export const Configurable = ( args: Args, { argTypes }: StoryContext ): Component => ( {
	components: { WvuiButton },
	setup() {
		return {
			args,
			slotContents: args.default,
			filteredProps: filterKeys( args, [ 'default' ] ),
			actionListeners: makeActionListeners( args, argTypes )
		};
	},
	template: `
		<wvui-button v-bind="filteredProps" v-on="actionListeners">
			{{ slotContents }}
		</wvui-button>
	`
} );

Configurable.args = {
	action: PrimaryAction.Default,
	quiet: false,
	disabled: false,
	default: 'Click me'
};

export const AllCombinations = ( args: Args, { argTypes }: StoryContext ): Component => ( {
	components: { WvuiButton },
	setup() {
		return {
			args,
			slotContents: args.default,
			filteredProps: filterKeys( args, [ 'default' ] ),
			actionListeners: makeActionListeners( args, argTypes ),
			actions: PrimaryAction
		};
	},
	template: `
		<table class="sb-button-combinations">
			<thead>
				<th v-for="(action, actionName) in actions" :key="action" scope="col">
					{{ actionName }}
				</th>
			</thead>
			<tbody>
				<tr v-for="disabled in [ false, true ]" :key="'disabled-' + disabled">
					<td v-for="(action, actionName) in actions" :key="action">
						<wvui-button
							:action="action"
							:disabled="disabled"
						>
							{{ slotContents }}
						</wvui-button>
					</td>
				</tr>
			</tbody>
			<tfoot class="sb-button-combinations-hint-mobile">
				<tr>
					<td
						:colspan="Object.keys( actions ).length + 1"
					>
						Please scroll horizontally to see all combinations.
					</td>
				</tr>
			</tfoot>
		</table>
	`
} );

AllCombinations.args = {
	default: 'Click me'
};

AllCombinations.argTypes = {
	action: {
		table: {
			disable: true
		}
	},
	quiet: {
		table: {
			disable: true
		}
	},
	disabled: {
		table: {
			disable: true
		}
	}
};

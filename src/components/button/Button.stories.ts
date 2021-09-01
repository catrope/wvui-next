import { Component } from 'vue';
import { Args, StoryContext } from '@storybook/addons';
import WvuiButton from './Button.vue';
import { PrimaryAction } from '../../actions/PrimaryAction';
import { filterKeys, makeActionArgTypes, makeActionListeners } from '../../utils/StoryUtils';

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

export interface ButtonProps {
	action: PrimaryAction,
	quiet: boolean,
	disabled: boolean
}

const Template = ( args: Args, { argTypes }: StoryContext ): Component => ( {
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

export const Configurable = Template.bind( {} );
// FIXME: some TypeScript wizardry is needed here.
Configurable.args = {
	action: PrimaryAction.Default,
	quiet: false,
	disabled: false,
	default: 'Click me'
};

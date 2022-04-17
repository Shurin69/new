import { G_Bus } from "./libs/G_Control.js";
import G_G from "./libs/G_G.js";
import GInput from "./components/input/input.component.js";
import GSelect from "./components/select/select.component.js";
import Modaler from "./components/modaler/modaler.component.js";



class Front extends G_G{
	constructor(){
		super();
		const _ = this;
		G_Bus.on('inputValidate',_.inputValidate.bind(_))
		G_Bus.on('testChange',_.testChange.bind(_))
		G_Bus.on('showNote',_.showNote.bind(_))
	}
	showNote(){
		G_Bus.trigger('showModal',{
			type: 'html',
			target: '#modal'
		});
	}
	testChange(changeData){
		const _ = this;
	}
	inputValidate(clickData){
		const _ = this;
		let inpt  = _.f(clickData['item'].getAttribute('data-target'));
		inpt.doValidate();
	}
	define(){
		const _ = this;
		_.set({
		})
	}
	init(){}
}
new Front();

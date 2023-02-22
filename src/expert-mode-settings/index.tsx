import { customElements, customModule, Module, Container, ControlElement, Modal, application, IEventBus } from '@ijstech/components';
import { BigNumber } from '@ijstech/eth-wallet';
import { EventId } from '@swap/global';
import { toggleExpertMode } from '@swap/store'
import styleClass from './index.css';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['expert-mode-settings']: ControlElement;
		}
	}
};

@customModule
@customElements('expert-mode-settings')
export class ExpertModeSettings extends Module {
  private expertModal: Modal;
  private $eventBus: IEventBus;

	constructor(parent?: Container, options?: any) {
		super(parent, options);
    this.$eventBus = application.EventBus;
	};

	async init(){
		this.classList.add(styleClass);
		super.init();
  }

  closeModal() {
    this.expertModal.visible = false;
  }

  showModal() {
    this.expertModal.visible = true;
  }

  onToggle() {
    toggleExpertMode();
    this.closeModal();
    this.$eventBus.dispatch(EventId.ExpertModeChanged)
  }

	render() {
		return (
      <i-modal id="expertModal" class='dark-modal' title="Expert Mode" closeIcon={{ name: 'times' }}>
        <i-panel class="expert-content">
          <i-panel class="warning-box">
            <i-label caption="Expert mode allows high slippage trades that often result in bad rates and lost funds."></i-label>
          </i-panel>
          <i-label class="warning-text" caption="Only use this mode if you know what you are doing."></i-label>
          <i-button width="100%" height="auto" caption="Turn On Expert Mode" onClick={this.onToggle.bind(this)}></i-button>
        </i-panel>
      </i-modal>
		)
	}
};
/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import toutiao_behavior from '../../behavior/toutiao_behavior'

Component({
  mixins: [onekit_behavior, toutiao_behavior],
  data: {},
  props: {
    name: '',
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    value: 0,
    color: '',
    selectedColor: '',
    activeColor: '',
    backgroundColor: '',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false,
  },
  didMount() {
    const value = Math.max(this.props.value, this.props.min)
    let backgroundColor
    let activeColor
    if (this.props.color || this.props.selectedColor) {
      backgroundColor = this.props.color
      activeColor = this.props.selectedColor
    } else if (this.props.backgroundColor) {
      backgroundColor = this.props.backgroundColor
      activeColor = this.props.activeColor
    } else {
      backgroundColor = '#e9e9e9'
      activeColor = '#1aad19'
    }

    this.setData({
      value,
      backgroundColor,
      activeColor
    })
  },
  methods: {
    slider_Change({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onChange) {
        this.props.onChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    slider_Changing({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onChanging) {
        this.props.onChanging({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})

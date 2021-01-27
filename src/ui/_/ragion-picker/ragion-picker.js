/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable max-len */
import PROVINCES from './data/provices.json'
import CITYS from './data/citys.json'
import TOWNS from './data/towns.json'

const VALUE = [
  PROVINCES[0].name,
  CITYS[`id${PROVINCES[0].id}`][0].name,
  TOWNS[`id${CITYS[`id${PROVINCES[0].id}`][0].id}`][0].name
]
Component({
  props: {
    onekitStyle: '',
    onekitClass: '',
    onekitId: '',
    headerText: null,
    disabled: false,
    value: VALUE,
    customItem: ''
  },
  methods: {
    _initColumn(data, name) {
      const rows = (this.props.customItem ? [{
        id: '',
        name: this.props.customItem,
        zipcode: ''
      }].concat(data) : data)
      let index = 0
      if (name) {
        rows.forEach((row, i) => {
          if (row.name === name) {
            index = i
          }
        })
      }
      return {
        rows,
        index
      }
    },
    ragion_show() {
      if (this.props.disabled) {
        return
      }
      const value = this.props.value
      const provinces_index = this._initColumn(PROVINCES, value[0])
      const citys_index = this._initColumn(CITYS[`id${provinces_index.rows[provinces_index.index].id}`], value[1])
      const towns_index = this._initColumn(TOWNS[`id${citys_index.rows[citys_index.index].id}`], value[2])
      //
      console.log(provinces_index, citys_index, towns_index)
      this.setData({
        show: true,
        provinces: provinces_index.rows,
        provinceIndexes: [provinces_index.index],
        citys: citys_index.rows,
        cityIndexes: [citys_index.index],
        towns: towns_index.rows,
        townIndexes: [towns_index.index]
      })
    },
    ragion_cancle() {
      this.setData({
        show: false
      })
      if (this.data.onCancle) {
        this.data.onCancle()
      }
    },
    ragion_confirm() {
      this.setData({
        show: false
      })
      const selectedProvince = this.data.provinces[this.data.selectedProvinceIndex]
      const selectedCity = this.data.citys[this.data.selectedCityIndex]
      const selectedTown = this.data.towns[this.data.selectedTownIndex]
      //
      const value = [selectedProvince.name, selectedCity.name, selectedTown.name]
      const code = []
      if (selectedProvince.id) {
        code.push(selectedProvince.id)
      }
      if (selectedCity.id) {
        code.push(selectedCity.id)
      }
      if (selectedTown.id) {
        code.push(selectedTown.id)
      }
      //
      const detail = {
        value,
        code
      }
      if (selectedTown.zipcode) {
        detail.postcode = selectedTown.zipcode
      }
      if (this.props.onChange) {
        this.props.onChange({
          detail
        })
      }
    },
    province_change(e) {
      const selectedProvinceIndex = this.data.selectedProvinceIndex = e.detail.value[0]
      //
      const province = this.data.provinces[selectedProvinceIndex]
      const citys_index = this._initColumn(CITYS[`id${province.id}`])
      //
      const towns_index = this._initColumn(TOWNS[`id${citys_index.rows[0].id}`])
      //
      this.setData({
        citys: citys_index.rows,
        cityIndexes: [citys_index.index],
        towns: towns_index.rows,
        townIndexes: [towns_index.index]
      })
    },
    city_change(e) {
      const selectedCityIndex = this.data.selectedCityIndex = e.detail.value[0]
      //
      const city = this.data.citys[selectedCityIndex]
      const towns_index = this._initColumn(TOWNS[`id${city.id}`])
      //
      this.setData({
        towns: towns_index.rows,
        townIndexes: [towns_index.index]
      })
    },
    town_change(e) {
      this.data.selectedTownIndex = e.detail.value[0]
    }
  },
})

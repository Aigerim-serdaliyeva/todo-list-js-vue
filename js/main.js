let newId = 0;

const app = new Vue({
  el: '#app',
  data: {
    newCar: '',
    cars: [
      {
        id: ++newId,
        name: 'Toyota',
        complete: false
      },
      {
        id: ++newId,
        name: 'Huyndai',
        complete: false
      }
    ],
    filter: 'all',
    searchText: ''
  },

  methods: {
    addCar(id) {   
      if(this.newCar.trim().length === 0) {
        return
      }
      this.cars.push(
        {
          id: ++newId,
          name: this.newCar,
          complete: false
        }
      )

      this.newCar = ''
    },
    deleteCar(id) { 
      const currentIndex = this.cars.findIndex((c) => {
        return c.id === id;
      })
      this.cars.splice(currentIndex, 1)
    },
    toggleCar(id) {
      const car = this.cars.find((c) => c.id === id)
      car.complete = !car.complete
    }
  },

  computed: {
    visibleCars: function() {
      const cars = this.cars.filter((car) => {
        return car.name.toLowerCase().includes(this.searchText.toLowerCase())
      })
      if (this.filter === 'active') {
        return cars.filter((c) => c.complete === false) //  return this.cars.filter((c) => !c.complete)
      } else if (this.filter === 'complete') {
        return cars.filter((c) => c.complete === true)  // return this.cars.filter((c) => c.complete)
       } else {
        return cars
      }
    }
  }
})
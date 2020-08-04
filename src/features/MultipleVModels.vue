 <template>
      <div>
        <h1>Multiple V-Models</h1>
        <label>Name: </label>
        <input :value="name" @input="updateName($event.target.value)" />
        <label>Age: </label>
        <input :value="age" @input="updateAge($event.target.value)" />
      </div>
    </template>
    <script>
    export default {
      props: {
        name: String,
        age: Number
      },
      setup(props, { emit }) {
        const updateName = value => {
          emit('update:name', value)
        }
        const updateAge = value => {
          emit('update:age', +value)
        }
        return { updateName, updateAge }
      }
    }
    </script>
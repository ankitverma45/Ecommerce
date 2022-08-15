function DataCont() {

    this.data = [];

    this.addData = (data) => {
        this.data.push(data)
    }

    this.getData = () => {
        return this.data
    }


    this.updateData = (newData) => {
        this.data = newData
        return this.data
    }
}

export const myData = new DataCont()



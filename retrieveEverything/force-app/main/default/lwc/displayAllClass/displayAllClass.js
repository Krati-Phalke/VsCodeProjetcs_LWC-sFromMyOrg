import { LightningElement, wire, track } from 'lwc';
import fetchAll from '@salesforce/apex/TestGeneratorCommonController.fetchAll';
import fetchBody from '@salesforce/apex/TestGeneratorCommonController.fetchBody';
export default class DisplayAllClass extends LightningElement {

  @track l_All_Types;
  @track TypeOptions;
  @track findBody;
  searchKey;

  @wire(fetchAll, {})
  show({ error, data }) {

      if (data) {
          try {
              this.l_All_Types = data; 
              let options = [];
               
              for (var key in data) {
                  // Here key will have index of list of records starting from 0,1,2,....
                  options.push({ label: data[key].Name, value: data[key].Id  });

                  // Here Name and Id are fields from sObject list.
              }
              this.TypeOptions = options;
               
          } catch (error) {
              console.error('check error here', error);
          }
      } else if (error) {
          console.error('check error here', error);
      }
  }

  handleTypeChange(event){
    this.searchKey = event.target.value; 
    console.log('seearchkey**************'+this.searchKey);
      // Do Something.
  }

handleSearch(){
  fetchBody({name: this.searchKey})
  .then((result) => {
    this.findBody = result;
    //result.forEach(element => {
    //  console.log('this.result********', element);
      //this.findBody = element;
   // });
    this.error = undefined;
    console.log('this.result********', this.findBody);
  })
  .catch((error) => {
    this.error = error;
    this.findBody= undefined;
  })
 }
}
/*@track options;
@track error;

@wire(fetchApexClasses)
    wiredContacts({ error, data }) {
        if (data) {
            this.options = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.options = undefined;
        }
    }
}

/*connectedCallBack() {
    this.getOptions();
  }

  getOptions() {
    fetchApexClasses({})
      .then((result) => {
         let options = [];
        if (result) {
          result.forEach(r => {
            options.push({
              label: r,
              value: r,
            });
          });
        }
        this.options = options;
      })
      .catch((error) => {
        // handle Error
      });
  }

}
   // @wire(fetchApexClasses) data;

   connectedCallback() {
        fetchApexClasses()
            .then(result => {
                this.options = result;
                console.log('this.result********', this.options);
            })
            .catch(error => {
                this.error = error;
            });
    }/*
    */
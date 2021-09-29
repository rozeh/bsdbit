



const Calendar = () => {
    const date = new Date()
    const calendar = {
        init: function(date, type){
            this.type = type;
        
            this.date = date;
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth() + 1;

        },

        setHeader : function() {
            //header
        },

        setCalendar : function () {
            this.setHeader();
        }
        
    }
   
        
}

export default Calendar;
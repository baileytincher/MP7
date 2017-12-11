// Bubble Sort

function BubbleSort(list) {

        var temp = 0;
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    return list;
    }

        var list1 = [7, 5, 8, 9, 3, 4, 2];
        bubbleSort(list1);

        for (var i = 0; i < list1.length; i++) {

            if ( i == list1.length - 1) {
                console.log( list1[i] + "." );
            } else {
                console.log( list1[i] + ", ");
            }
        }
    }

}



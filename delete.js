var a = [
            {"a": "Bhavik", "b":9681932444},
            {"a": "Ghanshyam", "b":7801901255},
            {"a": "Pratik", "b":7898001234}
        ];

        function b()
        {
            for(var i=0; i<a.length; i++)
            {
                alert(a[i]["a"] + " - " + a[i]["b"]);
            }
        }

        b();

        var z = prompt("Which name you have to delete?");

        function c()
        {
            for (var j=0; j<a.length; j++)
            {
                if (z == a[j]["a"])
                {
                    a.splice(j,1);
                }
            }
        }

        c();

        function d()
        {
            for (var l=0; l<a.length; l++)
            {
                alert(a[l]["a"] + " - " + a[l]["b"]);
            }
        }

        d();
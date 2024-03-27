function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function get_duration(start_date, end_date, duration) {
    start_date = new Date(start_date.innerHTML);
    end_date = end_date.innerHTML;
    if (end_date == "Present") {
      end_date = new Date();
    }
    else
    {
      end_date = new Date(end_date)
    }
    years = end_date.getFullYear() - start_date.getFullYear();
  //   Calculate the difference in months
    months = end_date.getMonth() - start_date.getMonth()+1;
  //   console.log(document.getElementById("startDate").innerHTML)
    console.log(start_date.getFullYear())
  //   console.log(years + " Yrs " + months + " Mos")
  //   Adjust for negative values
    if (months < 0) {
      years--;
      months += 12;
    }
    if(months>=12)
    {
      months%=12;
      years++;
    }
    if (years > 0) {
      duration.innerHTML =
        years + " Yrs " + months + " mos";
    } else {
      duration.innerHTML = months + " mos";
    }
}
function get_duration_old() {
  let start_date = new Date(document.getElementById("startDate").innerHTML);
  let end_date = document.getElementById("endDate").innerHTML;
  if (end_date == "Present") {
    end_date = new Date();
  }
  else
  {
    end_date = new Date(end_date)
  }
  years = end_date.getFullYear() - start_date.getFullYear();
//   Calculate the difference in months
  months = end_date.getMonth() - start_date.getMonth()+1;
//   console.log(document.getElementById("startDate").innerHTML)
//   console.log(start_date.getFullYear())
//   console.log(years + " Yrs " + months + " Mos")
//   Adjust for negative values
  if (months < 0) {
    years--;
    months += 12;
  }
  if(months>=12)
  {
    months%=12;
    years++;
  }
  if (years > 0) {
    document.getElementById("duration").innerHTML =
      years + " Yrs " + months + " mos";
  } else {
    document.getElementById("duration").innerHTML = months + " mos";
  }
}

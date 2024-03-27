import Stack from "@mui/material/Stack";

export default function Dashboard({ data }) {
  const totalAmount = () => {
    let sum = 0;
    data.map((i) => {
      sum = sum + parseInt(i.price);
    });

    return sum;
  };

  const maxAmount = () => {
    let newArray = [];
    data.map((i) => newArray.push(i.price));
    return Math.max.apply(null, newArray);
  };

  const minAmount = () => {
    let newArray = [];
    data.map((i) => newArray.push(i.price));
    return Math.min.apply(null, newArray);
  };

  return (
    <div
      style={{
        marginTop: 35,
        height: "80vh",
        width: "88vw",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={5}>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "rgba(255, 255, 255, 0.16)",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {`Total Amount: ₹${totalAmount()}`}
          </div>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "rgba(255, 255, 255, 0.16)",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {`Avg. Daily Expense: ₹${parseInt(totalAmount() / data.length)}`}
          </div>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "rgba(255, 255, 255, 0.16)",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {`Max. Amount Paid: ₹${maxAmount()}`}
          </div>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "rgba(255, 255, 255, 0.16)",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {`Min. Amount Paid: ₹${minAmount()}`}
          </div>
        </Stack>
        <Stack direction="row" spacing={5}>
          <div
            style={{
              width: "45rem",
              height: "33rem",
              background: "rgba(255, 255, 255, 0.16)",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            box1
          </div>
          <Stack spacing={1.5}>
            <div
              style={{
                width: "32rem",
                height: "16rem",
                background: "rgba(255, 255, 255, 0.16)",
                borderRadius: 16,
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5.4px)",
                WebkitBackdropFilter: "blur(5.4px)",
                border: "1px solid rgba(255, 255, 255, 0.17)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              box1
            </div>
            <div
              style={{
                width: "32rem",
                height: "16rem",
                background: "rgba(255, 255, 255, 0.16)",
                borderRadius: 16,
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5.4px)",
                WebkitBackdropFilter: "blur(5.4px)",
                border: "1px solid rgba(255, 255, 255, 0.17)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              box1
            </div>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

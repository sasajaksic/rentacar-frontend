import React, { useEffect, useState } from "react";
import PaymentMethodForm from "../../components/Form/PaymentMethodForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import PaymentMethodService from "../../services/PaymentMethodService";

const AddUpdateLocation = () => {
  const history = useHistory();
  const search = useLocation().search;
  const paymentMethodId = new URLSearchParams(search).get("paymentMethodId");
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    if (paymentMethodId) {
      PaymentMethodService.getById(paymentMethodId)
        .then(setPaymentMethod)
        .catch(console.error);
    }
  }, [paymentMethodId]);

  const receivePaymentMethod = (paymentMethod) => {
    if (paymentMethodId) {
      PaymentMethodService.updatePaymentMethod(
        paymentMethodId,
        paymentMethod
      ).then((data) => {
        history.push("/paymentMethods");
      });
    } else {
      PaymentMethodService.createNewPaymentMethod(paymentMethod).then(
        (data) => {
          history.push("/paymentMethods");
        }
      );
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New paymentMethod"}
              description={"Enter new paymentMethod information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <PaymentMethodForm
                  paymentMethod={paymentMethod}
                  sendPaymentMethod={receivePaymentMethod}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateLocation;

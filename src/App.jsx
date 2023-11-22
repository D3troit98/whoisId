import { useState } from "react";
import {
  AddressInformation,
  BuildingImages,
  CustomerInformation,
  Header,
  SignatureFooter,
  VerificationStatus,
} from "./components";

function App() {
  return (
    <main className="flex overflow-x-hidden flex-col bg-[#F7F7F7] px-4 md:px-8 lg:px-16">
      <Header />
      <div className="flex md:flex-row mt-4 md:mt-6 gap-4 flex-col">
        <CustomerInformation />
        <VerificationStatus />
      </div>

      <div className="flex md:flex-row mt-4 md:mt-6 gap-4 flex-col">
        <AddressInformation />
        <BuildingImages />
      </div>

      <SignatureFooter />
    </main>
  );
}

export default App;

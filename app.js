BX24.init(function() {
  BX24.callMethod("crm.contact.get", {
    id: BX24.placement.options.ID
  }, function(result) {
    if (result.error()) {
      alert("Error: " + result.error());
    } else {
      const contact = result.data();
      console.log("Contact info:", contact);

      document.getElementById("callBtn").addEventListener("click", function() {
        const phone = contact.HAS_PHONE ? contact.PHONE[0].VALUE : null;
        if (phone) {
          // Replace with your VoIP system URL or click-to-call logic
          window.open(`voxloud://${phone}`);
        } else {
          alert("No phone number found.");
        }
      });
    }
  });
});

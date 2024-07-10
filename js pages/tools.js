// Correct import of Composition API functions
const { createApp, ref, reactive, onMounted } = Vue;

// Define Vue component using Composition API
const App = {
  setup() {
    // Define a reactive variable to store the message
    const state = reactive({
      tools: [],
      currentCode: localStorage.getItem("myCode"),
    });
    console.log("currentCode : " + state.currentCode);

    // Fetch the projects using the token
    const fetchTools = async () => {
      const baseUrl = `https://srm-vbc7.onrender.com/api/tool-links`;
      const token =
        "f2004377863e9d767b12ed40b2a996ff71343b463323b990160adf52f660493e20e77b5f368d4f510a3f9a0ccb3bb2cbed5b8c8a6800c63d768eed032bf0eeeb030cfab84d2167ca498673aeb6528147a103989c27e944e87768be0b2b6c65f5f8ad994a831150e8bce9bbf650261d17cf5f5db8e03182ea2faec183d1ec11de";
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(baseUrl, { headers });
      const data = await response.json();
      filteredTools = data.data.filter(
        (tool) => tool.attributes.code === state.currentCode
      );
      state.tools = filteredTools;
      console.log(filteredTools);
      // console.log(filteredTools[0].attributes.res_link);
      // const resLinkElement = document.querySelector(".resLink");
      // if (!filteredTools[0]?.attributes.res_link) {
      //   resLinkElement.classList.add("d-none");
      // }
    };

    // Call the fetchProjects function on component mount
    onMounted(fetchTools);

    const displayToolsByCode = async () => {
      const filteredTools = state.tools.filter(
        (tool) => tool.attributes.code === state.currentCode
      );
      filteredTools.forEach((tool) =>
        window.open(tool.attributes.v4_link, "_blank")
      );
    };

    const displayresByCode = async () => {
      const filteredTools = state.tools.filter(
        (tool) => tool.attributes.code === state.currentCode
      );
      filteredTools.forEach((tool) =>
        window.open(tool.attributes.res_link, "_blank")
      );
    };

    return {
      state,
      fetchTools,
      displayToolsByCode,
      displayresByCode,
    };
  },
};

// Register the component with Vue
createApp(App).mount("#app");

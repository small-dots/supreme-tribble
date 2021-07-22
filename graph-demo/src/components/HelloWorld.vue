<!--
 * @Desc: 
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-13 11:22:44
-->
<template>
  <div>
    <div style="height:calc(100vh - 50px);" @click="showpanel = false">
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
        :show-panel="showPanel"
      />
    </div>
  </div>
</template>

<script>
import SeeksRelationGraph from "relation-graph-custom";
export default {
  name: "Demo",
  components: { SeeksRelationGraph },
  data() {
    return {
      showPanel: false,
      isShowCodePanel: false,
      graphOptions: {
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultJunctionPoint: "border",
        // 这里可以参考"Graph 图谱"中的参数进行设置
      },
    };
  },
  mounted() {
    this.showSeeksGraph();
    console.log(
      this.$moment()
        .subtract(15, "day")
        .unix()
    );
    console.log(this.$moment(new Date()).unix());
  },
  methods: {
    showSeeksGraph() {
      var __graph_json_data = {
        rootId: "a",
        nodes: [
          { id: "a", text: "A", borderColor: "yellow" },
          { id: "b", text: "B", color: "#43a2f1", fontColor: "yellow" },
          { id: "c", text: "C" },
          { id: "e", text: "E" },
        ],
        links: [
          { from: "a", to: "b", text: "关系1" },
          { from: "a", to: "c", text: "关系2" },
          { from: "a", to: "e", text: "关系3" },
          { from: "b", to: "e", text: "" },
        ],
      };
      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, "", () => {
        // 这些写上当图谱初始化完成后需要执行的代码
      });
    },
    onNodeClick(nodeObject) {
      this.showPanel = true;
      console.log("onNodeClick:", nodeObject);
    },
    onLineClick(lineObject) {
      console.log("onLineClick:", lineObject);
    },
  },
};
</script>

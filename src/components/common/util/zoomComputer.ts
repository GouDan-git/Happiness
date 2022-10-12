import { ref } from "vue";
/**
 *
 * @param height 期望高度
 * @param originalHeight 组件原始高度
 * @returns 组件缩放比例zoom（响应式数据）
 */
export default function getZoomByHeight(
  height: string | undefined,
  originalHeight: number
) {
  /**
   * @description 根据height计算图片的zoom
   * @param height props属性
   */
  const getZoom = (height: string | undefined) => {
    if (height == undefined) return 1;
    const index = height.indexOf("px");
    let finalHeight: string = "";
    if (index !== -1) {
      finalHeight = height.substring(0, index);
    }
    return parseInt(finalHeight) / originalHeight;
  };

  const zoom = ref(1);
  zoom.value = getZoom(height);
  return zoom;
}

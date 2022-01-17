import classNames from 'classnames';
import { textChangeRangeIsUnchanged } from 'typescript';
import { computed, defineComponent, ref } from 'vue';
import { nodeKey, TreeNodePorps } from './types';
import RenderNode from './render';
import ACheckbox from './CheckBox';

const props = TreeNodePorps();
export default defineComponent({
  name: 'TreeNode',
  props: props,
  emits: ['toggle-expand', 'select-change', 'check-change'],
  setup(props, { emit }) {
    return () => {
      const { node, render, iconSlot, showCheckbox, checkStrctly } = props;
      const halfChecked = computed(() => {
        let res = false;
        if (!checkStrctly && node?.hasChildren) {
          const { children } = node;
          const checkedChildren = children.filter((item) => item.checked);
          res =
            checkedChildren.length > 0 &&
            checkedChildren.length < children.length;
        }
        return res;
      });

      const handleCheckChange = (checked: boolean) => {
        // console.log('node checked feeled');

        emit('check-change', [checked, props.node]);
      };

      const handleExpand = () => {
        emit('toggle-expand', props.node);
      };
      const renderArrow = () => {
        return (
          <div class={['node-arrow', props.node?.expanded ? 'expanded' : '']}>
            {node!.hasChildren ? (
              iconSlot ? (
                iconSlot(node?.loading)
              ) : node?.loading ? (
                <i class="iconfont iconloading ico-loading"></i>
              ) : (
                <i class="iconfont iconExpand"></i>
              )
            ) : null}
          </div>
        );
      };
      const titleClasses = classNames('node-title', {
        disabled: node?.disabled,
        selected: node?.selected && !showCheckbox,
      });

      const handleSelect = (e: MouseEvent) => {
        e.stopPropagation(); //组织展开事件触发
        e.preventDefault();

        if (!node?.disabled) {
          emit('select-change', props.node);
        }
      };
      const sameContent = () => {
        return render ? (
          <RenderNode render={render} node={node}></RenderNode>
        ) : (
          <div class={titleClasses}>{node!.name}</div>
        );
      };
      const renderContent = () => {
        if (showCheckbox) {
          return (
            <ACheckbox
              disabled={node?.disabled}
              modelValue={node?.checked}
              halfChecked={halfChecked.value}
              onChange={handleCheckChange}
              class="node-content node-checkbox"
            >
              {sameContent()}
            </ACheckbox>
          );
        }

        return (
          <div onClick={handleSelect} class="node-content node-text">
            {sameContent()}
          </div>
        );
      };

      return (
        <div
          class="af-tree-node"
          style={{ paddingLeft: node!.level * 18 + 'px' }}
          key={node!.nodeKey}
          onClick={handleExpand}
        >
          {renderArrow()}
          {renderContent()}
        </div>
      );
    };
  },
});

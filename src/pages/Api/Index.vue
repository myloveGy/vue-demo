<template>
  <div class="row">
    <div class="col-md-12">
      <div class="page-header">
        <h1> API文档生成
          <small> 请认真填写表单数据信息</small>
        </h1>
      </div>
      <div class="page-content">
        <form @submit.prevent="handleSubmit" method="POST" id="form">
          <div class="form-group">
            <label for="title"> 接口名称 </label>
            <input
                type="text"
                class="form-control"
                id="title"
                name="api[title]"
                required="required"
                placeholder="请输入接口名称"
            />
          </div>
          <div class="form-group">
            <label for="address"> 接口地址 </label>
            <input
                type="text"
                class="form-control"
                id="address"
                name="api[url]"
                required="required"
                placeholder="请输入接口地址"
            >
          </div>
          <div class="form-group">
            <label for="method"> 接口请求方式 </label>
            <Select name="api[method]" id="method" :data="method_list"/>
          </div>
          <div class="form-group">
            <div>
              <label class="col-sm-2 control-label"> 接口请求参数 </label>
              <div class="col-sm-10">
                <div class="form-inline params-div" v-for="(_, index) in input_list" :key="index">
                  <div class="form-group">
                    <label>参数</label>
                    <input
                        type="text"
                        class="form-control"
                        :name="`api[params][${index}][name]`"
                        required="required"
                        placeholder="参数名称"
                    />
                  </div>
                  <div class="form-group">
                    <label class="sr-only">参数类型</label>
                    <Select :name="`api[params][${index}][type]`" :data="type_list"/>
                  </div>
                  <div class="form-group">
                    <label class="sr-only">是否必填</label>
                    <Select
                        :name="`api[params][${index}][required]`"
                        :data="[{label: '必填', value: '必填'}, {label: '非必填', value: '非必填'}]"
                    />
                  </div>
                  <div class="form-group">
                    <label class="sr-only">参数说明</label>
                    <input
                        type="text"
                        class="form-control"
                        :name="`api[params][${index}][desc]`"
                        placeholder="参数说明"
                    />
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-danger delete" @click="handleDelete(index)">
                      删除
                    </button>
                  </div>
                </div>
                <div style="margin-top: 15px">
                  <button type="button" class="btn btn-info" @click="handleCreateInput">
                    添 加
                  </button>
                </div>
              </div>
            </div>

          </div>
          <button type="submit" class="btn btn-success">保存</button>
          <button type="reset" class="btn btn-warning">重置</button>
        </form>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">API Markdown 文档</h4>
          </div>
          <div class="modal-body">
            <pre id="code" v-html="html"></pre>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" id="btn-copy" @click="handleCopy"> 复制信息</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Select from '@/components/Select'
  import {Process, objectToArray, copyText} from '@/utils'
  import {apiIndexApi, apiCreateApi} from '@/services'

  export default {
    name: 'Index',
    data() {
      return {
        type_list: [],
        method_list: [],
        input_list: [
          {},
        ],
        html: '',
      }
    },
    components: {
      Select,
    },

    methods: {
      handleDelete(index) {
        let data = this.input_list
        data.splice(index, 1)
        this.input_list = data
      },
      handleCreateInput() {
        this.input_list.push({})
      },

      handleCopy() {
        copyText($('#code').get(0))
        $('#myModal').modal('hide')
      },

      handleSubmit() {
        const params = $('#form').serialize()
        Process(async () => {
          this.html = await apiCreateApi(params)
          $('#myModal').modal({backdrop: 'static'})
        })
      },
    },

    created() {
      const me = this
      Process(async () => {
        const {type_list = {}, method_list = {}} = await apiIndexApi()
        me.type_list = objectToArray(type_list)
        me.method_list = objectToArray(method_list)
      })
    },
  }
</script>

<style scoped>
  .params-div {
    margin: 10px;
  }
</style>

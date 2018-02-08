import * as Realm from 'realm';

const ROS_REALM_ENDPOINT = process.env.ROS_REALM_ENDPOINT || 'realm://127.0.0.1:9080'
const ROS_AUTH_ENDPOINT = process.env.ROS_AUTH_ENDPOINT ||'http://127.0.0.1:9080'
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'realm-admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || ''

async function main() {
  const adminUser = await Realm.Sync.User.login(ROS_AUTH_ENDPOINT, ADMIN_USERNAME, ADMIN_PASSWORD)
  const realm = await Realm.open({
    sync: {
      url: `${ROS_REALM_ENDPOINT}/foo`,
      user: adminUser
    }
  })
}

main()

module.exports = {
	dependency: {
		platforms: {
			ios: {
				project: './platforms/ios/SQLite.xcodeproj'
			},
			android: {
				sourceDir: './platforms/android'
			},
			windows: {
				sourceDir: './platforms/windows',
				solutionFile: 'SQLitePlugin.sln',
				projects: [
				  {
					projectFile: 'SQLitePlugin/SQLitePlugin.vcxproj',
					directDependency: true,
				  }
				],
			}
		},
        dependencies: {
            "react-native-sqlite-storage": {
                platforms: {
                  android: {
                    sourceDir:
                      "../node_modules/react-native-sqlite-storage/platforms/android-native",
                    packageImportPath: "import io.liteglue.SQLitePluginPackage;",
                    packageInstance: "new SQLitePluginPackage()"
                  }
                }
              }
        }

      
	}
}